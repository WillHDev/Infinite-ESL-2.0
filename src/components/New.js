//fn component in most cases
//TODO look up when to use class component
import Layout from './Layout';
import axios from "axios";
import { useState } from 'react';

const DEFAULT_DATA = {
    title: "Some Title",
    description: "",
    link: "",
    priority:"2",
    timeToFinish: 60
}

const ResourceCreate = () => {
    const [ form, setForm ] = useState(DEFAULT_DATA);

    // const submitForm = () => {
    //     //request POST , vs absolute path
    //     fetch("/api/resources"), {
                                //^
    //         body: JSON.stringify(form),
    //         headers: {"Content-Type": "application/json"},
    //         method: "POST"
        
    //     }
    // }

    const submitForm = () => {

        axios.post("/api/resources", form)
        .then((res) =>  alert(res?.data))
        .catch((err) => {
            alert(err?.response?.data)});
        // fetch("/api/resources", {
        //   body: JSON.stringify(form),
        //   headers: {"Content-Type": "application/json"},
        //   method: "POST"
        // })
      }

    const resetForm = () => setForm(DEFAULT_DATA);

    const handleChange = (e) => {
        //console.log("Input is called/changing");
        //console.log(e.target.value);
        //console.log("called on:" + e.target.name );
        const { name, value } = e.target;
        
        setForm({ 
            ...form,
            [name]: value
         });

        // console.log(form);
    }
    //console.log(form);
    
    return (
            <Layout>
                <div className="container">
                    <div className="columns">
                        <div className="column is-8 is-offset-2">
                            <div className="resource-form">
                                <h1 className="title">Add New Resource</h1>
                                    <form>
                                        <div className="field">
                                            <label className="label">Title</label>
                                            <div className="control">
                                                <input 
                                                value={form.title}
                                                onChange={handleChange}
                                                name="title"
                                                className="input" 
                                                type="text" 
                                                placeholder="Learn Next JS and Sanity IO" />
                                        </div>
                                    </div>
                                        <div className="field">
                                            <label className="label">Description</label>
                                            <div className="control">
                                                <textarea 
                                                value={form.description}
                                                onChange={handleChange}
                                                name="description"
                                                className="textarea" 
                                                placeholder="Learn these technologies because they are very popular and enable better SEO">
                                                </textarea>
                                        </div>
                                        </div>
                                    <div className="field">
                                            <label className="label">Link</label>
                                            <div className="control">
                                                <input 
                                                value={form.link}
                                                onChange={handleChange}
                                                name="link"
                                                className="input" 
                                                type="text" 
                                                placeholder="https://academylink.com" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Priority</label>
                                        <div className="control">
                                            <div className="select">
                                            <select 
                                            value={form.priority}
                                            onChange={handleChange}
                                            name="priority"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            </div>
                                        </div>
                                        </div>
                                    <div className="field">
                                            <label className="label">Time to Finish</label>
                                            <div className="control">
                                                <input
                                                value={form.timeToFinish}
                                                onChange={handleChange}
                                                name="timeToFinish"
                                                 className="input" 
                                                 type="number" 
                                                 placeholder="60 (Time is in minutes)" />
                                        </div>
                                        <p className="help">Time in minutes</p>
                                    </div>
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button 
                                            type="button"
                                            onClick={submitForm}
                                            className="button is-link">Submit</button>
                                        </div>
                                        <div className="control">
                                            <button 
                                            type="button"
                                            onClick={resetForm}
                                            className="button is-link is-light">Cancel</button>
                                        </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           
            </Layout>
    )
}

export default ResourceCreate
