import { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";

const List = (props) => { //props是一个对象，包含了从父组件传递过来的数据 

  const [data, setData] = useState([]);
  //调用useEffect函数，传入两个参数，第一个参数是一个函数，第二个参数是一个空数组 []，表示只在组件挂载时调用一次
 useEffect(() => {
    getData();
  }, [props.refresh]); //当props.refresh发生变化时，调用getData函数从而获取最新数据，实现数据的实时更新

  //定义getdata函数\获取后台数据
  const getData = async () => {
    //get请求访问api接口，获取数据
    const response = await apiClient.get("/api/UserInfo/Get"); //await 会等待API数据请求完成后才会执行下一步，可以确保response data已经包含了从API 返回的数据
    const data = response.data;
    //返回值赋值给data
    setData(data);
  };


  return (
    //返回一个表格，表格中包含了从后台获取的数据
    <table className="border-separate border-spacing-2 border border-slate-500 ">
      <thead>
        <tr>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => {
          // map function is used to iterate over the array of data ，map会遍历数组中每一项，并在每次迭代中将当前项作为参数传递给 item， item是map方法的参数
          ////item 后需要和返回值一样，后台返回的数据是vorname，nachname，email  前端默认小写开头，所以这里需要小写
          return (
            <tr>
              <td>{item.vorname}</td>
              <td>{item.nachname}</td>
              <td>{item.email}</td>
              <td>
                <button
                  onClick={  () => {apiClient.post(`/api/UserInfo/Delete/${item.id}`).then(() => {getData();});}}
                >Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default List;
