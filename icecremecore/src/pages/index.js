import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FrontPage = () => (
  <Layout>
    <SEO title="Home" />
    <header class="d-flex align-items-center">
      <div class="container flex-column text-light mb-5 pb-3">
        <h1 class="display-4">Hello World!</h1>
        <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloremque mollitia corrupti optio hic deserunt quasi incidunt dolorum ipsam, aut ducimus? Ex, soluta? Totam laudantium expedita doloribus dicta, nemo aliquam!</p>
      </div>  
    </header>
    <section>
      <div class="container pt-5">
        <h3>Who am I?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eligendi voluptatem id cum consectetur rerum, voluptates tempore impedit corrupti qui ducimus nostrum, enim, ut pariatur molestiae ullam. Iste fugiat doloribus inventore cumque ea cum libero pariatur iusto. Nemo fugit facilis officia harum neque dignissimos voluptatibus, earum porro odit hic quos cum aut minus natus cumque commodi non tempore officiis facere est expedita, necessitatibus repudiandae dolores. Ratione impedit consectetur esse. Temporibus alias ipsa tempore consectetur nesciunt minima recusandae saepe modi iste nisi. Accusantium illum consequatur cupiditate quod quam eveniet libero corrupti accusamus voluptatibus voluptates unde vero soluta harum culpa, fugiat temporibus? Provident earum ipsum porro similique molestiae atque debitis fugiat molestias harum ex iste accusantium vel, assumenda facilis ipsam aut quidem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eligendi voluptatem id cum consectetur rerum, voluptates tempore impedit corrupti qui ducimus nostrum, enim, ut pariatur molestiae ullam. Iste fugiat doloribus inventore cumque ea cum libero pariatur iusto. Nemo fugit facilis officia harum neque dignissimos voluptatibus, earum porro odit hic quos cum aut minus natus cumque commodi non tempore officiis facere est expedita, necessitatibus repudiandae dolores. Ratione impedit consectetur esse. Temporibus alias ipsa tempore consectetur nesciunt minima recusandae saepe modi iste nisi. Accusantium illum consequatur cupiditate quod quam eveniet libero corrupti accusamus voluptatibus voluptates unde vero soluta harum culpa, fugiat temporibus? Provident earum ipsum porro similique molestiae atque debitis fugiat molestias harum ex iste accusantium vel, assumenda facilis ipsam aut quidem.</p>
      </div>
    </section>
  </Layout>
)

export default FrontPage
