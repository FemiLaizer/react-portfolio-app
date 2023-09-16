import React from 'react'

const Blog = ({ blogData }) => {
    let i = 0;
    return (
        <section className="work section" id="blog">
            <h2 className="section-title">Blog</h2>
            <div className="blog_container">

                {/* ========== Each blog box ========== */}
                <div className="blog">
                    <div className="blog_img">
                        <img className='img' src={
                            blogData[i].image
                        } alt={blogData[i].projectName} />
                    </div>
                    <div className="work-text">
                        <h2 className="work-h2">{blogData[i].projectName}</h2>

                        <p className='work-p blog-p'>This project was done to show my skills in {blogData[i].category} level for {blogData[i].type}.
                            <span>{blogData[i].details}</span>. You can check is out by clicking
                            to go to the GitHub reprository or just click the link below to check the deployed
                            version of the project <a href={blogData[i].link}>
                                <button className="work_category" onClick={() => alert('No article yet')}>
                                    Read More
                                </button>
                            </a>.
                        </p>
                    </div>
                </div>
                {/* ========== Each blog box ========== */}

                {/* ========== Each blog box ========== */}
                <div className="blog">
                    <div className="blog_img">
                        <img className='img' src={
                            blogData[i].image
                        } alt={blogData[i].projectName} />
                    </div>
                    <div className="work-text">
                        <h2 className="work-h2">{blogData[i].projectName}</h2>

                        <p className='work-p blog-p'>This project was done to show my skills in {blogData[i].category} level for {blogData[i].type}.
                            <span>{blogData[i].details}</span>. You can check is out by clicking
                            to go to the GitHub reprository or just click the link below to check the deployed
                            version of the project <a href={blogData[i].link}>
                                <button className="work_category" onClick={() => alert('No article yet')}>
                                    Read More
                                </button>
                            </a>.
                        </p>
                    </div>
                </div>
                {/* ========== Each blog box ========== */}



            </div>
        </section>
    )
}

export default Blog;