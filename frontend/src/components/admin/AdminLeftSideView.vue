<template>
      <div class="grid">
        <div class="col-12 lg:col-6 lg:col-offset-1">
          <router-link to="/user/create">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Lav en ny bruger</span>
                        <div class="text-900 font-medium text-xl">152 Brugere</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-users text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
            </div>
          </router-link>
        </div>
      </div>
</template>