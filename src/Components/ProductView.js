import React,{Component} from 'react';


export default class ProductView extends Component{
    constructor(){
        super();
        this.state={isEdit:false}
        this.Edit=this.Edit.bind(this);
        this.Delete=this.Delete.bind(this);
        this.UpdateProduct=this.UpdateProduct.bind(this);
    }
    UpdateProduct(e){
        e.preventDefault();
        this.props.UpdateProduct(this.pid.value,this.pname.value,this.pprice.value);
        this.setState({isEdit:false});
    }
    Edit(){
        this.setState({isEdit:true})
    }

    Delete(){
        this.props.DeleteItem(this.props.id);
    }
    render(){
        const {id,name,price}=this.props;
        return(
            this.state.isEdit?(
                <div>
                    <form onSubmit={this.UpdateProduct}>
                    <input defaultValue={id} ref={pid=>this.pid=pid}/>
                    <input defaultValue={name} ref={pname=>this.pname=pname} />
                    <input defaultValue={price} ref={pprice=>this.pprice=pprice} />
                        <button>Update</button>
                    </form>
                </div>
            ):(
                <div>
                        <span> ID: {id}</span> { `|` }
                        <span> Product: {name}</span>{` | `}
                        <span> Price: {price}</span>{` | `}
                        <button onClick={this.Edit} >Edit</button>{` | `}
                        <button onClick={this.Delete}>Delete</button>
                </div>
            )
        );
    }
}