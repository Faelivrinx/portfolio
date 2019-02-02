import BaseLayout from "./layouts/BaseLayout";

class SuperComponent extends Component {

    constructor(){
        super();

        this.someVariable
    }

    render() { 
        return ( 
            <BaseLayout>
                <h1>Super Component</h1>
            </BaseLayout>
         );
    }
}
 
export default SuperComponent;