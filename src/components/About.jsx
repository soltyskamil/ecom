import React from 'react'
import NewArrivals from './NewArrivals'
import '../styles/about/about.css'
import { aboutImages } from './images'
function About() {
  return (
    <div className='about__section'>
        <NewArrivals title='O selectshop' images={aboutImages}/>
        <div className="about__section__info">
            <h3>SELECTSHOP.PL polski skate shop on-line.</h3>
            <p>W naszym sklepie posiadamy najlepsze marki z kategorii Streetwear, Skateboard/Deskorolka, Snowboard. W ofercie mamy najmodniejsze ubrania ze świata od zagranicznych brandów, takich jak: Vans, RipNDip, Carhartt , The North Face, Thrasher, Nike Sb, Dickies, New Era, 47 Brand. W Selectshop znajdziesz również ubrania od marek takich, jak: Kamuflage*, Palto, Chaos, Prosto, Première, 2005, Relab, Mercur czy An-Appendage. Z tymi markami każda lifestylowa stylizacja nada Ci oryginalny look nie tylko podczas uprawiania sportu. Możesz je również nosić na co dzień, dzięki czemu będziesz wyglądał niezwykle modnie i czuł się komfortowo w każda porę roku. W naszym skateshopie znajdziesz wiele marek dedykowanych jeździe na deskorolce, takich jak: Independent Truck, Spitfire Wheels, Polar Skate, Bones, Almost, Real Skateboards, Jart, Cliché, DGK, Thunder, ACE. Co więcej, nasza obsługa dobierze dopasowany do Twoich potrzeb sprzęt skateboard’ingowy, aby jazda sprawiała Ci frajdę. Sprawdź również ubrania i akcesoria snowboardowe od Palto, bo na stok też trzeba mieć w czym wyjść! Produkty z naszej oferty możesz indywidualnie dobierać i łączyć ze sobą tworząc tym samym oryginalne i niepowtarzalne „outfity".</p>
            <p>Wolisz przed zakupem przymierzyć towar? Nie ma problemu. Zapraszamy do naszych sklepów stacjonarnych. Tutaj jesteśmy: Rzeszów Millenium Hall, Galeria Rzeszów, Kraków Bonarka, Wrocław Magnolia Park, Warszawa Blue City i Poznań Stary Browar. Już dziś odwiedź nas i kup najnowsze i najmodniejsze ciuchy streetwear w najlepszych cenach!</p>
        </div>
    </div>
  )
}

export default About