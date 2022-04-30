import React, { Component } from 'react';


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        const field = Object.assign({}, this.state);
        field[e.target.name] = e.target.value;
        this.setState({...field})
    }

    render() {
        return (
            <div className='flex justify-center'>
                <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[40%]'>
                    <span className='text-2xl text-center'>Login</span>
                    <div className='flex mt-3'>
                        <input type="text" className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration' 
                        placeholder='Username' 
                        name='username'
                        value={this.state.username} 
                        onChange={this.handleChange} />
                    </div>
                    <div className='flex mt-3'>
                        <input type="text" className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration' 
                        placeholder='Password' 
                        name='password'
                        value={this.state.password} 
                        onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="button" value="Login" className='btn mt-7 w-[100%] hover:scale-[1.02]' />
                    </div>
                </div>
            </div>
        );
    }
}



export default Login;
