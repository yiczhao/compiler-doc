<template>
    <div :class="_classes">
        <input type="text" class="input"
            v-model="dataName"
            @input="getList | debounce _debounce"
            @keyup.enter="getList"
            :disabled="disable"
            :placeholder="placeholder"
            >
        <a class="icon SearchIcon" @click="getList" v-if="!disable">&#xe617;</a>
        <div class="SearchResult" v-show="show">
            <ul>
                <template v-if="fuzzydata.length >= 1">
                    <li v-for="item in fuzzydata" track-by="$index" @click="selectItem($event, $index)">
                        {{ item[name] }}
                    </li>
                </template>
                <template v-else>
                    <li @click="selectItem">当前无搜索结果</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        VERSION: '1.0.0',
        props: {
            show: {type: Boolean, required: true},
            disable: {type: Boolean, default: false},
            placeholder: {type: String, default: '输入关键词搜索'},

            fuzzydata: {type: Array, required: true},
            name: {type: String, default: 'label'},
            sign: {type: String, default: 'key'}, 
            dataName: {type: String, default: ''},
            dataSign: {},
            debounce: {type: Number, default: 777}
        },
        ready() {
            document.addEventListener('click', (e) => {
                if (this.$el && !this.$el.contains(e.target)) {
                    this.show = false
                }
            }, false)
        },
        data() {
            return { }
        },
        methods: {
            getList () {
                this.$emit('actionsearch')
            },
            selectItem (event, index) {

                this.show = false

                // 无搜索结果
                if (typeof index == 'undefined') return 

                // 把需要的id传回父页面
                this.dataName = this.fuzzydata[index][this.name]
                this.dataSign = this.fuzzydata[index][this.sign]
            },
        },
        computed: {
            _debounce () {
                return this.debounce
            },
            _classes () { return `KsSearch KsSearch--${this._uid}` }
        }
    }
</script>

<style lang="scss">
    @import "../styles/Search"
</style>