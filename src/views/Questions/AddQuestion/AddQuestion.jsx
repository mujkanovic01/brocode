import React from 'react'
import { useHistory } from "react-router-dom";

export default function AddQuestion() {
    const history = useHistory();

    return (
        <section class="contact-clean">
        <form method="post">
            <h2 class="text-center">Postavi pitanje</h2>
            <div class="form-group"><input class="form-control" type="text" name/></div>
            <div class="form-group"><textarea class="form-control" name="message"/></div>
            <div class="form-group"><button class="btn btn-primary" type="submit"/></div>
        </form>
    </section>

    )
}
