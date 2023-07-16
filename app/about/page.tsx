import Style from './about.module.css'

export default function page() {
  return (
    <div className={Style.about_body}>
        <h1 className={Style.about}>About</h1>
        <p className={Style.paragraph}>
        The Max Space 
        website is the online 
        presence of Max Space Inc. 
        They are a company that focuses on creating products 
        that are enjoyable to use and aim to make people's lives more enjoyable. 
        If a customer purchases a product from Max Space and finds it not fun to use or fails
         to make their life more enjoyable, Max Space offers a return policy. The website mentions that all products 
         have a 1-year warranty, except for the Grate Spatula, which is guaranteed for life.
          If customers are not satisfied, 
         they can contact the company for help or return authorization. The website also states 
         that Max Space treats all credit 
         card information in accordance with privacy laws. 
        </p>
    </div>
  )
}
