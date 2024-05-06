import { ref } from "vue"

const counter = ()=> {

    const a = ref(0);

    const increment = () => {
        a.value++;
    }
    const decrement = () => {
        if(a.value > 0) {
        a.value-- ;
        }    
        
    }

    return {a,increment,decrement};

}


export default counter