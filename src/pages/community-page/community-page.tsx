import { Component, Host, h, Prop } from '@stencil/core'
import {
  ResponsiveContainer,
  PrismicRichText,
  Grid,
  Col,
} from '@ionic-internal/ionic-ds'

@Component({
  tag: 'community-page',
  styleUrl: 'community-page.scss',
  scoped: true,
})
export class CommunityPage {
  @Prop() data: any

  render() {
    const { Top, Websites } = this

    return (
      <Host>
        <meta-tags
          pageTitle="Community Hub"
          description={
            'Get connected and get help from the Install Doctor community. Find out how you can join our thriving community.'
          }
        />
        <Top />
        <Websites />
        <pre-footer />
        <capacitor-site-footer />
      </Host>
    )
  }

  Top = () => {
    const { top, top__list } = this.data

    return (
      <ResponsiveContainer id="top" as="section">
        <div class="heading-group">
          <PrismicRichText richText={top} paragraphLevel={2} />
        </div>
        <div class="cards">
          {top__list.map(({ image, text, link: { target, url } }) => (
            <a target={target} href={url} class="card">
              <div class="image-wrapper">
                <prismic-image image={image} loading="eager" />
              </div>
              <PrismicRichText richText={text} />
            </a>
          ))}
        </div>
      </ResponsiveContainer>
    )
  };

  Websites = () => {
    const { websites__list } = this.data

    const dimensions = ['48x48', '48x48', '48x48', '48x48']

    return (
      <ResponsiveContainer id="websites" as="section">
        <Grid>
          {websites__list.map(({ icon, text, link }, i) => {
            const [width, height] = dimensions[i].split('x')
            return (
              <Col cols={12} xs={6} md={3}>
                <div class="image-wrapper">
                  <prismic-image
                    width={width}
                    height={height}
                    image={icon}
                  />
                </div>
                <PrismicRichText richText={text} />
                <PrismicRichText class="link" richText={link} />
              </Col>
            )
          })}
        </Grid>
      </ResponsiveContainer>
    )
  };
}
