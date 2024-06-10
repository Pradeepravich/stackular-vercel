import React, { FC, useState } from "react";

interface Props {
  data: any;
  companyStandardData: any;
}

const Services: FC<Props> = ({ data, companyStandardData }) => {
  
  const [activeTab, setActiveTab] = useState<string>("Product");
  const openGrid = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    serviceName: string
  ) => {
    setActiveTab(serviceName);
  };

  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <section id="services" className="services hero-padding">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-8 services-title d-none d-md-block">
                    <h1>{data?.system?.name?.replace(/(<([^>]+)>)/gi, "")}</h1>
                  </div>
                  <div className="col-lg-4 d-flex align-items-end d-none d-md-block">
                    <div className="contact-img ps-0 ps-lg-5">
                      <div className="position-relative">
                        <img
                          src="assets/images/general/Group-7.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 services-title d-block d-md-none">
                    <h1>{data?.system?.name?.replace(/(<([^>]+)>)/gi, "")}</h1>
                  </div>
                </div>
                <div className="col-lg-12 tabs">
                  <div className="box" id="boxid">
                    <div className="navlist">
                      <a
                        href={"/"}
                        onMouseOver={(event) => openGrid(event, "Product")}
                        className={`btn btn-plain tablinks ${
                          activeTab === "Product" ? "active_tab" : ""
                        }`}
                      >
                        {data?.elements?.product_development?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </a>
                    </div>
                    <div className="navlist">
                      <a
                        href={"/"}
                        onMouseOver={(event) => openGrid(event, "Data")}
                        className={`btn btn-plain tablinks ${
                          activeTab === "Data" ? "active_tab" : ""
                        }`}
                      >
                        {data?.elements?.data_visualization?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </a>
                    </div>
                    <div className="navlist">
                      <a
                        href={"/"}
                        onMouseOver={(event) => openGrid(event, "Enterprise")}
                        className={`btn btn-plain tablinks ${
                          activeTab === "Enterprise" ? "active_tab" : ""
                        }`}
                      >
                        {data?.elements?.enterprise_systems?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </a>
                    </div>
                    <div className="navlist">
                      <a
                        href={"/"}
                        onMouseOver={(event) => openGrid(event, "Digital")}
                        className={`btn btn-plain tablinks ${
                          activeTab === "Digital" ? "active_tab" : ""
                        }`}
                      >
                        {data?.elements?.digital_experience?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tabcontents mt-5">
                  <div className="textbox">
                    {activeTab === "Product" && (
                      <div id="Product" className="tabcontent active_content">
                        <div className="row">
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.product_strategy_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {data?.elements?.product_strategy?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {data?.elements?.crafting_strategic?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {data?.elements?.strategy_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.product_management_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {data?.elements?.product_management?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {data?.elements?.strategic_guidance?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {data?.elements?.strategy_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards">
                            <img
                              src={
                                data?.elements?.experience_design_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {data?.elements?.experience_design?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {data?.elements?.crafting_seamless?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {data?.elements?.design_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="border_bottom"></div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.mvp_implementation_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {data?.elements?.mvp_implementation?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {data?.elements?.efficiently_build?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {data?.elements?.mvp_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.operations_support_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>
                              {data?.elements?.operations_support?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                            <p>
                              {data?.elements?.operations_support_streamlines?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>
                              {data?.elements?.operations_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "Data" && (
                      <div id="Data" className="tabcontent active_content">
                        <div className="row">
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.artificial_intelligence_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.artificial_intelligence?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.ai_services_leverage?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.artificial_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.business_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.business_intelligence?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.data_driven_insights?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.business_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="col-lg-4 services-cards">
                            <img
                              src={
                                data?.elements?.data_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.data_visualization?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.transforms_complex_data?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.data_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="border_bottom"></div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.platform_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.platform_modernization?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.modernize_platforms?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.platform_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "Enterprise" && (
                      <div
                        id="Enterprise"
                        className="tabcontent active_content"
                      >
                        <div className="row">
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.modern_workplace_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.modern_workplace?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.innovate_collaboration?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.modern_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.service_desk_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.service_desk?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.service_desk_offers?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.service_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="col-lg-4 services-cards">
                            <img
                              src={
                                data?.elements?.managed_services_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.managed_services?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.it_support?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.managed_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="border_bottom"></div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.bpm_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.bpm?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.bpm_services_optimize?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.bpm_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.crm_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.crm?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.streamlines_customer_interactions?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.crm_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "Digital" && (
                      <div id="Digital" className="tabcontent active_content">
                        <div className="row">
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.ux_research_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.ux_research?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.unlock_user_insights?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.ux_research_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.ux_design_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.ui_ux_design?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.ui_ux_design_creates?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.ux_design_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="col-lg-4 services-cards">
                            <img
                              src={
                                data?.elements?.branding_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.branding?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.branding_services_craft?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.branding_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="border_bottom"></div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.usability_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.usability_testing?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.usability_testing_observes?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.usability_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                          <div className="col-lg-4 services-cards border_right">
                            <img
                              src={
                                data?.elements?.design_audit_img?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            />
                            <h4>{data?.elements?.design_audit?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</h4>
                            <p>
                            {data?.elements?.design_audit_ensures?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </p>
                            <a href={"/"}>{data?.elements?.design_learn_more?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}</a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <section id="make_us" className="make-us-sec mt-5">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-5 make-us-haed">
                    <div className="section-header">
                      <h3>
                        {companyStandardData?.elements?.what_makes_us_different?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-2 make-us-haed d-none d-md-block"></div>
                  <div className="col-lg-5">
                    <div className="make-us-content">
                      <p>
                        {companyStandardData?.elements?.we_succeed?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 gy-4">
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={
                        companyStandardData?.elements?.block_img1?.value[0]?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.unique_culture?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.fostering_innovation?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={
                        companyStandardData?.elements?.block_img2?.value[0]?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.technology_focus?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.driving_progress?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={
                        companyStandardData?.elements?.block_img3?.value[0]?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.product_workflow?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.a_structured_approach?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={
                        companyStandardData?.elements?.block_img4?.value[0]?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.experienced_team?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.seasoned_experts?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={
                        companyStandardData?.elements?.block_img5?.value[0]?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.high_quality_services?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.elevating_standards?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={
                        companyStandardData?.elements?.block_img6?.value[0]?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.prioritize_usability?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.putting_user?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
