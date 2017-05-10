export default {
    bind () {
        this.contains = (e) => {
            console.log(this.el.contains(e.target))
            if (this.el.contains(e.target)) return false
            if (this.expression) {
                this.vm[this.expression]()
            }
        };
        document.addEventListener('click', this.contains,false)
    },
    unbind () {
        document.removeEventListener('click', this.contains,false)
    }
};