import React from 'react'
import "../assets/css/contentSection.css"
import ContentSectionCard from "../components/ContentSectionCard";
import InformationCards from "../view/InformationCards";

export default function ContentSection() {
    return (
        <section className='content-section'>
            <ContentSectionCard title="Newest technology" image='up'></ContentSectionCard>
            <ContentSectionCard title="Newest technology" image='down'></ContentSectionCard>
            <InformationCards></InformationCards>
            <article style={{ display: "flex", justifyContent: "center", margin: "0.5em" }}>
                <button type="button" class="btn btn-outline-primary">Get started today</button>
            </article>
        </section>
    )
}
