import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'

import TruckIndex from '@/components/Truck/Index'
import TruckCreate from '@/components/Truck/CreateTruck'
import TruckEdit from '@/components/Truck/EditTruck'
import TruckShow from '@/components/Truck/ShowTruck'

import CommentIndex from '@/components/Comments/Index'

import Upload from '@/components/Utils/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/truck',
      name: 'truck',
      component: TruckIndex
    },
    {
      path: '/truck/create',
      name: 'truck-create',
      component: TruckCreate
    },{
      path: '/truck/edit/:truckId',
      name: 'truck-edit',
      component: TruckEdit
    },
    {
      path: '/truck/:truckId',
      name: 'truck',
      component: TruckShow
    },


    
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
