import React, { Fragment, useState, useEffect } from 'react';
import './CL-SliderProductos.scss';

const CL_SliderProductos = (props) => {

  const productselect = (products) => {
    props.setSelectProduct([products]);
  }


  return (
    <Fragment>
      <div class="wrapper">
        <section id="section1">
          <a href="#section3" class="arrow__btn">‹</a>
          <div class="item">
            <img src="https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp" />
          </div>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg" />
          </div>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp" />
          </div>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdYtAqj8CyaJTWq5taD8Ro_UgwH3nne9QpFGVps-2J3IG-leqrfqXFii4jzZn48nPYTkrlwKQEV0R7_cEKlYBPRzdKqNODc-Oz26IL3LlLgFboXibIWXwxzeYxzuqn0I9TpARjeByw.jpg" />
          </div>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg" />
          </div>
          <a href="#section2" class="arrow__btn">›</a>
        </section>
        <section id="section2">
          <a href="#section1" class="arrow__btn">‹</a>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg" />
          </div>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTOj1-116yVcgKWMU2dI3GFR4x0fSkiGsqtLLeLUxRR7STaksjAqBTrYlTfrB8nIGnGvXksi0ewXAhVGg6-pLxpFOIfcpjK-pf8D5xehFZo5a6vJbo4L0AGbrzglbyUoq255QBJgRQ.jpg" />
          </div>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg" />
          </div>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABXSd7bhDddcwkq9XpksoQFCHVx29Sxl_h4hb2n3F2GIt32a4XWcOnctQfgnT5qdolv8UML6_xNB5CJ89h56wueb13mYmEBr0sx5e9iLPdtVcOQAOmKXKWHHXwFvJuCUwuNnL3s8eAQwqLXPVMHMEsujM684rUGrZNF2btN2GRy5-RyEslsxZO93V2Q_H2bWs8A8oayt1h5M.webp" />
          </div>
          <div class="item">
            <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABbXWODpAWqVXcmmjMA7K-2mPkQpvwCLfSdeyhVXzR8A3MSpdSEnnjf4HEJJTYC-TnktU6njTUGAxmzWEYCaJbk4v_ZeL-7QGzmkvYBjg_N-evr2XmcX-Fanoyvu_nimFP4iigPe4O3Vr_WcgplhwkDrJwPUJa84wRLrNAx3TufN5V7cWRP4indqu5HQahvgFEqfL9zjp4g.jpg" />
          </div>
          <a href="#section3" class="arrow__btn">›</a>
        </section>
        <section id="section3">
          <a href="#section2" class="arrow__btn">‹</a>
          {
            props.products ?
              props.products.map(products => (
                <div class="item">
                  <img src={products.urlimg} onClick={e => productselect(products)} />
                </div>

              )) : "Mal"
          }
          <a href="#section1" class="arrow__btn">›</a>
        </section>
      </div>
    </Fragment>

  );
}

export default CL_SliderProductos;