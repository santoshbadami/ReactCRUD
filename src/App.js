import React,{Component} from 'react';
import ProductView from './Components/ProductView';
import ProductAdd from './Components/ProductAdd';

const products=[{id:'1',name:'iPod',price:20000},{id:'2',name:'iPhone',price:50000},{id:'3',name:'Smart watch',price:5000}];

localStorage.setItem('products',JSON.stringify(products));

export default class App extends Component{
  constructor(){
    super();
    this.state={products:[]}

    this.DeleteItem=this.DeleteItem.bind(this);
    this.SaveProduct=this.SaveProduct.bind(this);
    this.UpdateProduct=this.UpdateProduct.bind(this);
  }
  componentWillMount(){
   const products =JSON.parse(localStorage.getItem('products'))
   this.setState({products});
  }
  UpdateProduct(id,name,price){
    let products=this.state.products;
    products.map(product=>{
      if(product.id===id)
      {
        debugger;
        product.name=name;
        product.price=price;
      }
      return product;
    })
    this.setState({products});
  }
  SaveProduct(id,name,price){
    let products=this.state.products;
    products.push({id,name,price});
    this.setState({products:products});
  }
  DeleteItem(id){
    const products=this.state.products;

    const filteredproduct=products.filter(product=>{
      return product.id!==id;
    })
    this.setState({products:filteredproduct});
  }
  render(){
    return(
      <div>
        <div>
          <ProductAdd SaveProduct={this.SaveProduct}/>
        </div>
        <div>
        {this.state.products.map(product=>
          {return <ProductView key={product.id}
          {...product} DeleteItem={this.DeleteItem} 
          UpdateProduct={this.UpdateProduct}/>})}
        </div>        
      </div>
    );
  }
}