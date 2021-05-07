<script>
import path from 'path';
import { isExternal } from '@/common/utils/validate';
import Item from './Item';
import AppLink from './Link';
import FixiOSBug from './FixiOSBug';

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    }
  },
  render(createElement, context) {
    console.log(context);
    const { item, isNest } = this;
    if (item.hidden) {
      return null;
    }
    let hasOneShowingChild = false;
    let onlyOneChild = {};
    const showingChildren = item.children.filter(child => !child.hidden);

    // When there is only one child router, the child router is displayed by default
    hasOneShowingChild = showingChildren.length === 1;

    // Show parent if there are no child router to display
    if (showingChildren.length === 0) {
      onlyOneChild = { ...item, path: '', noShowingChildren: true };
      hasOneShowingChild = true;
    }
    if (
      hasOneShowingChild &&
      (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
      !item.alwaysShow
    ) {
      return onlyOneChild.meta ? (
        <app-link to={this.resolvePath(onlyOneChild.path)}>
          <el-menu-item
            index={this.resolvePath(onlyOneChild.path)}
            className={{ 'submenu-title-noDropdown': !isNest }}>
            <item
              icon={onlyOneChild.meta.icon || (item.meta && item.meta.icon)}
              title={onlyOneChild.meta.title}
            />
          </el-menu-item>
        </app-link>
      ) : null;
    } else {
      return (
        <el-submenu
          index={this.resolvePath(item.path)}
          popper-append-to-body={true}>
          {item.meta && (
            <template slot="title">
              <item
                icon={item.meta && item.meta.icon}
                title={item.meta.title}
              />
            </template>
          )}
          {item.children.map(child => (
            <sidebar-item
              key={child.path}
              is-nest={true}
              item={child}
              base-path={this.resolvePath(child.path)}
              className="nest-menu"
            />
          ))}
        </el-submenu>
      );
    }
  }
};
</script>
