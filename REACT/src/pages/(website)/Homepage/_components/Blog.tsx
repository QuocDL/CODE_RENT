import Dash from "./Dash"

const Blog = () => {
  return (
    <section className="blog">
                <div className="container">
                    <Dash title="Blog"/>
                    <div className="blog_inner">
                        <div className="blog_box">
                            <img src="./public/blog1.png" alt="" />
                            <div className="blog_box__text">
                                <div className="blog_box__text__desc">
                                    <h3>THE ULTIMATE SOFA BUYING GUIDE</h3>
                                    <p>
                                        The versatility of our living space is more crucial than ever.
                                        But buying a sofa might be a difficult undertaking. Your needs
                                        and the size of your living area will determine everything,
                                        However, don’t worry, were are here to help you
                                    </p>
                                </div>
                                <div className="blog_box__action">
                                    <a href="">
                                        <span>ABOUT</span>
                                        <img src="./public/arrow.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="blog_box">
                            <img src="./public/blog2.png" alt="" />
                            <div className="blog_box__text">
                                <div className="blog_box__text__desc">
                                    <h3>A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
                                    <p>
                                        Your level of comfort when geting into and out of bed can be
                                        greatly influenced by the bed frame you choose. It may
                                        significantly affect how want your bedroom to feet and look
                                    </p>
                                </div>
                                <div className="blog_box__action">
                                    <a href="">
                                        <span>ABOUT</span>
                                        <img src="./public/arrow.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="blog_box">
                            <img src="./public/blog3.png" alt="" />
                            <div className="blog_box__text">
                                <div className="blog_box__text__desc">
                                    <h3>WHY IS A TV CONSOLE A MUST IN EVERY HOUSE</h3>
                                    <p>
                                        People do a lot of research to make sure they purchase the ideal
                                        televisoin. And like the rest of us, you want to keep that
                                        gorgeous flat srceen in your living or bedroom on a table or
                                        stand
                                    </p>
                                </div>
                                <div className="blog_box__action">
                                    <a href="">
                                        <span>ABOUT</span>
                                        <img src="./public/arrow.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Blog
