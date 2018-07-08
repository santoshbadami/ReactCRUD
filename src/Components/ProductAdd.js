import React,{Component} from 'react';

export default class ProductAdd extends Component{
    constructor(){
        super();
        this.Submit=this.Submit.bind(this);
    }
    Submit(e){
        e.preventDefault();
        this.props.SaveProduct(this.pid.value,this.pname.value,this.pprice.value);
        this.pid.value='';
        this.pname.value='';
        this.pprice.value='';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.Submit}>
                <input placeholder='ID' ref={pid=>this.pid=pid}/>
                <input placeholder='Product' ref={pname=>this.pname=pname} />
                <input placeholder='Price' ref={pprice=>this.pprice=pprice} />
                <button>Save</button>
                </form>
            </div>
        );
    }
}