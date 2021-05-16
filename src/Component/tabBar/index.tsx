import React, { Component } from "react";
import { Row, Col } from "antd";

import './index.css'

interface clickParam{
    params: object
}
interface paramsInteface {
    logo: string;
    loginUrl: string;
    rightBtn(): () => clickParam
}

class TabBar extends Component<any, any> {
    constructor(props: paramsInteface) {
        super(props);
    }


    render() {
        return (
            <div className="tabbar-content">
                <Row>
                    <Col span={ 8 } className="logo">

                    </Col>
                </Row>
            </div>
        )
    }
}

export default TabBar