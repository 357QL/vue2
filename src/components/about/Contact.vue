<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <router-link tag="lab" :to="{name:'persionLink'}">尊姓大名</router-link>
      <router-link tag="lab" :to="{name:'phoneLink'}">联系电话</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
