import { ref } from 'vue'
export default function(){
    let courseTypeFn = ( type )=>{
        let val = ref('');
        switch (type) {
            case 1:
              val.value = '初级';
              break;
            case 2:
             val.value = '中级';
              break;
            case 3:
              val.value = '高级';
              break;
            default:
              val.value = '';
        }
        return val.value;
    }
    return {
        courseTypeFn,
    } 
}
