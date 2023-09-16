import React, {useState} from 'react'

const About = ({ image, name, about_info }) => {

    const [showMore, setshowMore] = useState(false);

    return (
        <section className="section" id="about">
            <h2 className="section-title">About</h2>

            <div className="about_container bd-grid">
                <div className="about_img">
                    <img src={image} alt={name} />
                </div>

                <div className='about_text'>
                    <h2 className="about_subtitle">Oluwafemi Laizer</h2>
                    <p className="about_p"> {
                        showMore ? about_info : `${about_info.substring(0, 300)}...`
                    }
                    <button className="work_category" onClick={() => setshowMore(!showMore)}>
                        {
                            showMore ? "Show Less" : `Show More`
                        }
                    </button>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About