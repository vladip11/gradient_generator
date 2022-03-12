const app = Vue.createApp({
    data:()=>({
            title: "Gradient Generator Vue",
            fcolor: "#d5ee11",
            scolor: "#472c06",
            orientation: 1,
        }),
    computed: {
        setColor(){
            if(this.orientation==1){
                return `background: linear-gradient(to right, ${this.fcolor}, ${this.scolor});`
            }
            if(this.orientation==2){
                return `background: linear-gradient(to left, ${this.fcolor}, ${this.scolor});`
            }
            if(this.orientation==3){
                return `background: linear-gradient(to top, ${this.fcolor}, ${this.scolor});`
            }
            if(this.orientation==4){
                return `background: linear-gradient(to bottom, ${this.fcolor}, ${this.scolor});`
            }
            
        }
    }

});