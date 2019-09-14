import React from "react";
import PropTypes from "prop-types";
import { confirmEmail } from "../../actions/auth";
import { Result, Button, Spin, Icon } from 'antd';
import { Link } from "react-router-dom";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class ConfirmationPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            userId:props.match.params.userId,
            token:props.match.params.token,
            confirmed:false,
            error:null
        }
        
    }
    componentDidMount(){
        const{ userId,token }=this.state;
        if(!!userId&&!!token)
        {
            confirmEmail(userId,token).then((data)=>{
                this.setState({
                    confirmed:true
                })
            }).catch((err)=>{
                this.setState({
                    error:err.error
                })
            })
        }
    }
    render() {
        return (
            <div className="wrap text-center">
                {this.state.confirmed?
                <Result
                    status="success"
                    title="Successfully confirmed account!"
                    subTitle="Log in to discover new things!"
                    extra={[
                        <Button type="primary" key="console">
                            <Link to="/login">
                                Log in
                             </Link>
                        </Button>
                    ]}
                />:
                this.state.error?
                <Result
                    status="error"
                    title={this.state.error}
                    subTitle="Can you log in to fix this?"
                    extra={[
                        <Button type="primary" key="console">
                            <Link to="/login">
                                Log in
                             </Link>
                        </Button>
                    ]}
                />:
                <Spin className="text-center p25vh" tip="Loading..." indicator={antIcon}></Spin>
                }
            </div>
        );
    }
}

ConfirmationPage.PropTypes={
    match:PropTypes.shape({
        params:PropTypes.shape({
            userId:PropTypes.string.isRequired,
            token:PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}
export default ConfirmationPage;
