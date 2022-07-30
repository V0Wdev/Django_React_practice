import React, {useState} from 'react';
import APIservice from './APIservice';
import {useCookies} from 'react-cookie';

function Form(props) {
    const [title, setTitle] = useState(props.article.title)
    const [description, setDescription] = useState(props.article.description)
    const [user, setUser] = useState(props.article.user)
    const [token] = useCookies(['mytoken'])

    const updateArticle=()=>{
        APIservice.UpdateArticle(props.article.id, {title,description}, token['mytoken'])
            .then(resp =>props.updatedInformation(resp))
        }

    const insertArticle=()=>{
        APIservice.InsertArticle({title,description, user}, token['mytoken'])
    }
  return (
    <div id={props.article.id}>
        {props.article  ? (

            <div className='mb-3'>
            <label htmlFor='title' className='form-label'>Title</label>
            <input type="text" className='form-control' id='title' value={title} onChange={e=>setTitle(e.target.value)}></input>
            <label htmlFor='description' className='form-label'>Description</label>
            <textarea type="text" className='form-control' id='description' rows='5' value={description} onChange={e=>setDescription(e.target.value)}></textarea>
            <br/>
            {props.article.id ? <button className='btn btn-success' onClick={updateArticle} >Update</button>  
               :<button className='btn btn-success' onClick={insertArticle} >Add</button> }
            </div>

        ) : null}
    </div>
  )
}

export default Form