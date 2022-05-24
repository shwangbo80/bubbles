import React from "react"
import {Container, Row, Col, Image} from "react-bootstrap"

export default function Boba() {
  return (
    <Container>
      <Row className="py-5 bg-white">
        <Col></Col>
        <Col md={6}>
          <Image
            fluid
            className="mt-5"
            src="https://cdn.dribbble.com/users/46891/screenshots/4245827/media/0f15f2b478deb896f3b4f886330f8466.png?compress=1&resize=800x600&vertical=top"
          />
          <h1 className="mt-5">What is Boba?</h1>
          <p>
            Bubble Tea is the catch-al name for endless unusual monikers of the
            drink also known as tapioca pearl drink, tapioca bal drink, pearl
            shake, pearl tea, black pearl tea, big pearl, boba tea, boba ice
            tea, boba nai cha, milk tea, bubble drink, zhen zhu nai cha, momi,
            momi milk tea, QQ, BBT, PT, and many more!
          </p>
          <p>
            The "bubble" originaly referred to the foam created by shaking the
            freshly brewed tea with ice, but is also now commonly represented by
            the tapioca pearls served in every glass (more on these later!)
            Bubble teas are generaly of two distinct types: fruit-flavored teas,
            and milk teas.
          </p>
          <p>
            Some shops also sel a hybrid along the lines of "fruit milk teas."
            Most milk teas include powdered dairy or non-dairy creamers, but
            some shops also offer fresh milk as an alternative. Other varieties
            of bubble tea are 100% crushed-fruit smoothies with tapioca pearls
            and signature ice cream shakes made from local ice cream sources.
          </p>
          <p>
            Many American bubble tea vendors sel "milk smoothies," which are
            similar to bubble tea but do not contain any tea ingredients. Some
            smal cafés offer sweetener substitutes such as honey, agave, stevia,
            and aspartame upon special request.
          </p>
          <h4 className="mt-5">History of Boba</h4>
          <p>
            Two Taiwanese shops claim to be the creators of bubble tea. One is
            Chun Shui Tang teahouse in Taichung, where Liu Han Chie experimented
            with cold milk tea by adding fruit, syrup, candied yams, and tapioca
            bal s in the early 1980s.
          </p>

          <p>
            The other is the Hanlin Teahouse in Tainan, Taiwan, owned by Tu
            Tsong He Hanlin. He made tea using traditional white fenyuan, or
            tapioca, which has the appearance of pearls, supposedly resulting in
            the so-cal ed "pearl tea." Shortly after, Hanlin changed the white
            fenyuan to the black version that is seen most today.
          </p>

          <p>
            Although there is much debate about which teahouse the famous drink
            came originated from, most know of its origin being Taichung,
            Taiwan's center-most city. The introduction of tapioca pearls to the
            tea started as a bit of novelty, and the idea spread to become an
            established part of the Bubble Tea we know and love today.
          </p>
          <p>
            Bubble tea rose to international recognition, spreading from Taiwan
            to other East Asian countries. It then migrated to the United
            States, Europe, and the rest of Asia.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
