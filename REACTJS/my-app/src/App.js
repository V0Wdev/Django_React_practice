import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function App() {

  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useNavigate()

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application',
        'Authorization' :`Token ${token["mytoken"]}`
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error =>console.log(error))
  }, [])
  
  const articleForm =()=>{
    setEditArticle({title:'', description:''});
  }
  
  useEffect(()=>{
    if (!token['mytoken'])
    {
        history('/')
    }
                            
},[token]);
  const logoutBtn=()=>{
    removeToken(['mytoken'])
  }

  return (
    <div className="App">

        <div className='left-part'>
          <h3>Django ReactJS blog app</h3>
          <button  onClick={logoutBtn} className='btn btn-primary'>Log Out</button>
        </div>
        <div className='right-part'>
        <div> 
            <button  onClick={articleForm} className='btn btn-primary'>Add article</button>
            {editArticle ? <Form article={editArticle}/>:null}
          </div>
          <hr className='hrclass'/>
          <ArticleList articles ={articles} />

          
        </div>
        
    </div>
  );
}

export default App;
