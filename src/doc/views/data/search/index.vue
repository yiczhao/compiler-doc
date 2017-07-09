<template>
    <div>
        <div class="ibw page-tabs">
            <a class="ib tab" title=""
                v-bind:class="{'active': active == 'search/v1.0.0'}" 
                v-link="{name: 'search/v1.0.0'}">v1.0.0</a>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    data () {
        return {
            active: ''
        }
    },
    route: {
            data (transiton) {
                this.active = transiton.to.name
            }
        }
    }
</script>
