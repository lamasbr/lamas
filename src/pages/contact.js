import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class ContactPage extends React.Component {
  render() {
    const siteTitle = "Entre em contato"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contato"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/blog/"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <p>
            <label for="nome">Seu nome: </label>
            <input type="text" name="nome" id="nome" />
          </p>

          <p>
            <label for="email">Seu email: </label>
            <input type="email" name="email" id="email" />
          </p>

          <p>
            <label>Your Role: </label>
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </p>

          <p>
            <label for="mensagem">Mensagem: </label>
            <textarea
              name="mensagem"
              id="mensagem"
              cols="30"
              rows="10"
            ></textarea>
          </p>

          <p>
            <input type="submit" value="Enviar" /> |{" "}
            <input type="reset" value="Redefinir" />
          </p>
        </form>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default ContactPage
