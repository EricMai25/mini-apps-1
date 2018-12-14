
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            page: 0,
            F1: [],
            all: null
        }
    }

    purchase(obj){
        console.log(obj , 'in apps')
        fetch( '/purchased',{
            method : 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json ; charset=utf-8' }
        }).then((res)=>{
            console.log(res)
        })
        
    }

    movePage(pageOn , obj , move){
        if(move === 'prev'){
            pageOn--
            this.setState(
                {
                    page : pageOn,
                }
            )
        }
        if(move === 'next'){
            this.state.F1[pageOn]= obj
            var all = Object.assign(...this.state.F1)
            pageOn++
            this.setState(
                {
                    page : pageOn,
                    all

                }
            )
        }
        
    }

    render(){
        return(
            <div>
                { this.state.page === 0 ? (<Home  click={this.movePage.bind(this)}/>) :
                    this.state.page === 1 ? (<F1 click={this.movePage.bind(this)}/>) :
                    this.state.page ===2 ? (<F2 click={this.movePage.bind(this)}/>):
                    this.state.page === 3 ? (<F3 click={this.movePage.bind(this)}/>) : (<Purchase info={this.state.all} add={this.purchase.bind(this)} click={this.movePage.bind(this)}/>) }
            </div>
        )

    }

}

const Home = (props)=>{
    return(
        <form>
            <button type="button"  onClick={()=>{props.click(0 , {} , 'next')}}>CheckOut</button>
        </form>
    )

}
    

class F1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Name: '',
            Email: '',
            Password: ''
        }
    } 
    
    render(){
        return(
            <div>
                <form > Name:<br></br>
                    <input type='text' name="name" onChange={(e)=>{this.state.Name = e.target.value}}/> <br></br>
                    Email:<br></br>
                    <input type='text' name="email" onChange={(e)=>{this.state.Email = e.target.value}}/> <br></br>
                    Password:<br></br>
                    <input type='text' name="password" onChange={(e)=>{this.state.Password = e.target.value}}/> <br></br>
                    <button type="button" onClick={(e)=>{this.props.click(1 , {} , 'prev')}}>Prev</button>
                    <button type="button"  onClick={(e)=>{this.props.click(1 , this.state, 'next')}}>Next</button>
                </form>
            </div>



        )
    }



}

class F2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            line1:'',
            line2:'',
            city:'',
            state:'',
            zip:'',
            phone: ''
        }
    } 
    
    render(){
        return(
            <div>
                    <form > Ship To Address:<br></br>
                    <input type='text' name="line1" onChange={(e)=>{this.state.line1 = e.target.value}}/> <br></br>
                    <input type='text' name="line2" onChange={(e)=>{this.state.line2 = e.target.value}}/> <br></br>
                    City:<br></br>
                    <input type='text' name="city" onChange={(e)=>{this.state.city = e.target.value}}/> <br></br>
                    State:<br></br>
                    <input type='text' name="State" onChange={(e)=>{this.state.state = e.target.value}}/> <br></br>
                    Zip-code:<br></br>
                    <input type='text' name="State" onChange={(e)=>{this.state.zip = e.target.value}}/> <br></br>
                    Phone:<br></br>
                    <input type='text' name="Zip" onChange={(e)=>{this.state.phone = e.target.value}}/> <br></br>
                    <button type="button" onClick={(e)=>{this.props.click(2 , {} , 'prev')}}>Prev</button>
                    <button type="button"  onClick={(e)=>{this.props.click(2 , this.state, 'next')}}>Next</button>
                </form>
            </div>



        )
    }



}

class F3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardNo: '',
            exp: '',
            cvv: '',
            billing: ''
        }
    } 
    
    render(){
        return(
            <div>
                <form > Card No:<br></br>
                    <input type='text' name="cardNo" onChange={(e)=>{this.state.cardNo = e.target.value}}/> <br></br>
                    Exp Date:<br></br>
                    <input type='text' name="exp" onChange={(e)=>{this.state.exp = e.target.value}}/> <br></br>
                    CVV:<br></br>
                    <input type='text' name="cvv" onChange={(e)=>{this.state.cvv = e.target.value}}/> <br></br>
                    Billing Zip:<br></br>
                    <input type='text' name="billing" onChange={(e)=>{this.state.billing = e.target.value}}/> <br></br>
                    <button type="button" onClick={(e)=>{this.props.click(3 , {} , 'prev')}}>Prev</button>
                    <button type="button"  onClick={(e)=>{this.props.click(3 , this.state, 'next')}}>Next</button>
                </form>
            </div>
        )
    }
}

class Purchase extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }

    }
    
    render(){
        return(
            <form>
                <div>
                    {Object.entries(this.props.info).map(([key,value])=>{
                        return(
                            <div key={key}> {key} : {value.toString()}</div>
                        )
                    })}
                </div>
                <button type="button"  onClick={()=>{this.props.click(4 , {}, 'prev')}}>Prev</button>
                <button type="button"  onClick={()=>{this.props.add(this.props.info)  }}>Purchase</button>
            </form>
        )

    }
}

ReactDOM.render(<App/>, document.getElementById('app'))

