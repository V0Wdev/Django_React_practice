import React from 'react'
import Form from './Form'
import {useState} from 'react';
import APIservice from './APIservice';
import { useCookies } from 'react-cookie';

function ArticleList(props) {
  
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)
  const [token] = useCookies(['mytoken'])

  const editBtn = (article) =>{
    setEditArticle(article)
  }

    const updatedInformation = (article)=>{
      const new_article = articles.map(myarticle =>{
      if(myarticle.id === article.id)
      {
        return article;
      }
      else {
        return myarticle;
      } 

    })
    setArticles(new_article)
    }     

  const deleteArticle =(article)=>{
   APIservice.DeleteArticle(article.id, token['mytoken'])
  }
    return (
    <div>
        {props.articles && props.articles.map(article => {
        
        return (
        <div key = {article.id}>
        <h2> {article.title} </h2>
        <p>{article.description} </p>
        <p>{article.user}</p>
        <div className='row'>
        <div className='col'>
        <button className='btn btn-primary' onClick={()=> editBtn(article)}>Update</button>
        </div>
        <div className='col'>
        <button className='btn btn-danger' onClick={()=>deleteArticle(article)}>Delele</button>
        </div>
        </div>
        {editArticle && (editArticle.id === article.id) ? <Form  article={editArticle} updatedInformation = {updatedInformation}/> : null}
        <hr className='hrclass'/>
        </div>
        )
        }) }
    </div>
  )
}
export default ArticleList