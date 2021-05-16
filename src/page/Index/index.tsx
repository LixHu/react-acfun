import React, { Component }  from "react";
// antd
import { Layout  } from "antd";
import './index.css'
import TabBar from "../../Component/tabBar";


const { Header, Footer, Content } = Layout;


class App extends Component<any, any> {

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div className="content" >
                <Layout>
                    <Header> <TabBar /> </Header>
                    <Content> Content </Content>
                    <Footer> Footer </Footer>
                </Layout>
            </div>
        )
    }

}


export default App