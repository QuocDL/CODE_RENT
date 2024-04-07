
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActionFillter = ({handleLimitChange, limit, pagination}: any) => {
    
  return (
       <section className="action-bar">
                <div className="container">
                    <div className="action-bar_inner">
                        <div className="action-bar_inner_left">
                            <div className="action-bar_inner_left_filter">
                                <div>
                                    <a href="">
                                        <img src="./public/option.png" alt="" />
                                    </a>
                                </div>
                                <a href="">
                                    <span>Filter</span>
                                </a>
                            </div>
                            <div className="action-bar_inner_left_dot">
                                <a href="">
                                    <img src="./public/dot.png" alt="" />
                                </a>
                            </div>
                            <div className="action-bar_inner_left_viewlist">
                                <a href="">
                                    <img src="./public/viewlist.png" alt="" />
                                </a>
                            </div>
                            <div className="action-bar_inner_left_showing">
                              {!pagination && <span>Not Product To Result</span>}
                              {pagination &&   <span>Showing {limit} of {pagination?.totalItem} results</span>}
                            </div>
                        </div>
                        <div className="action-bar_inner_right">
                            <div className="action-bar_inner_right_action">
                                <span>Show</span>
                                <select onChange={handleLimitChange} defaultValue={limit} style={{border: 'none'}} className="action-bar_inner_right_box">
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div className="action-bar_inner_right_action">
                                <span>Short by</span>
                                <span className="action-bar_inner_right_default">Default</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default ActionFillter
