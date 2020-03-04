import React from 'react';
import '../StyleSheets/Form.css'
import Toggle from './Toggle'
class Form extends React.Component {
        constructor() {
            super();
            this.state = {
          nameandlastname: '',
          password :'',
          confirm:''
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleBorder = this.handleBorder.bind(this);
         this.invalidBorder = this.invalidBorder.bind(this);
       }
       

       handleChange(event) {
        if(event.target.id==='name')this.setState({nameandlastname: event.target.value});
        if(event.target.id==='pass')this.setState({password: event.target.value});
        if(event.target.id==='conf')this.setState({confirm: event.target.value});
       }
    
      handleSubmit(event) {
        let a=0;
        if(this.state.nameandlastname===''){this.invalidBorder('name');++a}
        if(this.state.password===''){this.invalidBorder('pass');++a}
        if(this.state.confirm==='' || this.state.confirm!==this.state.password){
          this.invalidBorder('conf');
          ++a;
          alert('کلمه عبور و تکرار آن همخوانی ندارند!')
          this.setState({confirm:''});
          document.getElementById('conf').value='';
        }
        if(a===0)alert('اطلاعات با موفقیت ثبت شد.')
        a=0;
        event.preventDefault();
      }

      handleBorder(event){
        if(event.target.value!=='')
        document.getElementById(event.target.id).style.borderColor='#F6EFEE';
      }

      invalidBorder(id){
         document.getElementById(id).style.borderColor='red';
      }
      
      render() {
        return (
          <form>
            <div className="form" >
                 <label className="inline">نام و نام‌خانوادگی</label>
                 <input id="name" type="text" className="input" value={this.state.nameandlastname} onChange={this.handleChange} onBlur={this.handleBorder}/>
                 <label className="inline">کلمه عبور شما</label>
                 <input id="pass" type="password" className="input" value={this.state.password} onChange={this.handleChange} onBlur={this.handleBorder}/>
                 <label className="inline">تکرار کلمه عبور شما</label>
                 <input id="conf" type="password" className="input" value={this.state.confirm} onChange={this.handleChange} onBlur={this.handleBorder}/>

                <Toggle/>

                 <input type="button" value="ثبت‌نام در ناویت" onClick={this.handleSubmit} />
              
            </div>
          </form>
        );
       }
      }
      export default Form;