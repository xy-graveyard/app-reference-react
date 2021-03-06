import React, { Component } from "react"; 
import "./assets/App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import SideNav from "./components/SideNav";
import MethodView from "./components/MethodOutputView";
import sdkKotlinBle from "./schemas/BLE_Kotlin_Schema";
import sdkSwiftBle from "./schemas/BLE_Swift_Schema";
import swiftObject from "./schemas/Object_Swift_Schema";
import nodeObject from "./schemas/Node_Package_Schema";
import androidObject from "./schemas/XYO_Android_Schema";
import sdkXyoSwift from "./schemas/XYO_Swift_SDK";

import kotlinObject from "./schemas/Core_Kotlin_Schema";
import { Container, Col, Row } from "reactstrap";
import NodeMethodOutputView from "./components/NodeMethodOutputView";

const kotlinBleProductState = sdkKotlinBle[0];
const swiftBleProductState = sdkSwiftBle[0];
const swiftCoreObjectState = swiftObject[0];
const nodePkgObjectState = nodeObject[0];
const kotlinObjectState = kotlinObject[0];
const androidObjectState = androidObject[0];
const xyoSwiftObjectState = sdkXyoSwift[0];

class App extends Component {
  
  // something like const [methods] = useState(kotlinBleProductState.modules) ???

  constructor(props) {
    super(props)
    this.state = {
      products: [androidObjectState.id, xyoSwiftObjectState.id, kotlinBleProductState.id, swiftBleProductState.id, swiftCoreObjectState.id, kotlinObjectState.id],
      platforms: [androidObjectState.platform, xyoSwiftObjectState.platform, kotlinBleProductState.platform, swiftBleProductState.platform, swiftCoreObjectState.platform, kotlinObjectState.platform],
      platformViews: [],
      methods: []
    }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    this.setState({
      methods: kotlinBleProductState.modules
    })
  }
  
  handleClick(e) {
    if (e.target.id === swiftCoreObjectState.id) {
      this.setState({
        methods: swiftCoreObjectState.modules
      })
    }
    
    if (e.target.id === kotlinBleProductState.id) {
      this.setState({
        methods: kotlinBleProductState.modules
      })
    }

    if (e.target.id === swiftBleProductState.id) {
      this.setState({
        methods: swiftBleProductState.modules
      })
    }

    if (e.target.id === androidObjectState.id) {
      this.setState({
        methods: androidObjectState.modules
      })
    }

    if (e.target.id === xyoSwiftObjectState.id) {
      this.setState({
        methods: xyoSwiftObjectState.modules
      })
    }
    
    // if (e.target.id === nodePkgObjectState.id) {
    //   this.setState({
    //     methods: nodePkgObjectState.modules
    //   })
    // }
    if (e.target.id === kotlinObjectState.id) {
      this.setState({
        methods: kotlinObjectState.modules
      })
    }
    
    if (e.target.id === "Android") {
      this.setState({
        methods: kotlinBleProductState.modules
      })
    }

    if (e.target.id === "iOS") {
      this.setState({
        methods: swiftCoreObjectState.modules
      })
    }

    // if (e.target.id === "web") {
    //   this.setState({
    //     methods: nodePkgObjectState.modules
    //   })
    // }

    if (e.target.id === "kotlin") {
      this.setState({
        methods: kotlinObjectState.modules
      })
    }
  }
  
  render() {
    return (
      <div className="app">
      <Layout>
        <div className="fixed-top">
          <MainHeader />
          <Header 
            methods={this.state.methods} 
            product={this.state.products} 
            onClick={this.handleClick}
            />
        </div>
        <Container fluid style={containerStyle}>
          <Row>
              <Col xs="auto" className="d-none d-sm-block">
              <SideNav 
                methods={this.state.methods} 
                product={this.state.products}
                />
            </Col>
            <Col className="xs-6 border-left">
                {
                  this.state.methods === nodePkgObjectState.modules ? 
                  <NodeMethodOutputView
                  methods={this.state.methods}
                  /> : 
                  <MethodView
                  methods={this.state.methods} 
                  />
                }
            </Col>
          </Row>  
        </Container>
      </Layout>
      </div>
    )
  }
}

const containerStyle = {
  marginTop: "5rem"
}

export default App