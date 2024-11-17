import { useState } from "react";
import Banner from "./banner";
import Form from "./form";
import OurFood from "./Banner3";
import Highlights from "./banner2";
import ProductList from "./banner4";
import FoodieSteps from "./order";

function Index() {

const [refresh,setRefresh]=useState(false)

  return (
    <>
      <Banner></Banner>
      <Highlights></Highlights>
      <OurFood></OurFood>
      <ProductList></ ProductList>
      <FoodieSteps></ FoodieSteps>
     {/*
  <div className="flex items-center justify-center mx-3 h-[500px] rounded-3xl">
    <Form setRefresh={setRefresh} data="" />
  </div>
  <div className="flex justify-center">
    <List refresh={refresh}></List>
  </div>
*/}
    </>
  );
}
export default Index;
