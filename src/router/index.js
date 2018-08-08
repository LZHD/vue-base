import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AgGrid from '@/components/AgGrid'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/AgGrid',
			name: 'AgGrid',
			component: AgGrid
		}
	]
})
