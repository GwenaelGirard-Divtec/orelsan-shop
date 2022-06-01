<template>
    <footer>
        <div class="footer-left">
            <div class="footer-description">
                <span class="title">Site conçus par Gwenaël Girard</span>
                <span>Ce site est basé sur le <a href="https://orelsan.store/" target="_blank">site de vente de CD's</a> d'orelsan pour son dernier album : <a href="https://open.spotify.com/album/2o2GBOfy2GG9oKYZgfZkur?si=4yDYlJUISxS4sFKNiQjKGw" target="_blank">Civilisation</a></span>
            </div>
            <span>&copy; Orelsan</span>
            </div>
        <div class="footer-right">
            <span class="title">Contact : </span>
            <ul>
                <li><a href="mailto:gwenael@girard-pro.ch">gwenael@girard-pro.ch</a></li>
                <li><a href="https://github.com/GwenaelGirard-Divtec">Github</a></li>
                <li><a href="https://giragwe.divtec.me">Site web</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer {
    background-color: var(--black);
    padding: 2em;
    color: var(--gray);
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: var(--footer-height);
}

footer div {
}

a {
    color: var(--gray);
}

.footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.footer-left .footer-description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.title {
    color: var(--white);
    margin-bottom: .5em;
}

.footer-right ul {
    list-style-type: "- ";
    padding-left: 1em;
}

.footer-right ul li {
    margin: .5em 0;
}
</style>