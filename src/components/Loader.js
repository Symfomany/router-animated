import React, { Component } from 'react';
import styled from 'styled-components';
import loader from '../assets/img/loader.gif';


const Contenair = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items:center;
`;





class Loader extends Component {


    


    render() {




        return (
            <Contenair>
                <img src={loader} alt="" style={{ maxWidth: "100%", height:"300px" }}/>
            </Contenair>

        );
    }
}
export default Loader;
