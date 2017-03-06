$(document).ready(() => {
    const $container = $("#flex-container");

    function renderSlowly () {
        console.log("Slow render");
        for (let i = 0; i < 1000; i++) {
            const $newDiv = $("<div>"),
                $title = $("<h2>").text(Math.random().toString(36).slice(2)),
                $lead = $("<h3>").text(Math.random().toString(36).slice(2)),
                $time = $("<p>").text(new Date().toLocaleString())
            $container.append($newDiv)
            $newDiv.append($title)
            $newDiv.append($lead)
            $newDiv.append($time)

        }
    }

    function renderFast () {
        let $toAdd = [];
        console.log("Fast render");
        for (let i = 0; i < 1000; i++) {
            const $newDiv = $("<div>"),
                $title = $("<h2>").text(Math.random().toString(36).slice(2)),
                $lead = $("<h3>").text(Math.random().toString(36).slice(2)),
                $time = $("<p>").text(new Date().toLocaleString())
            $newDiv.append($title)
            $newDiv.append($lead)
            $newDiv.append($time)
            $toAdd.push($newDiv)
        }
        $container.append($toAdd)
    }

    $("body#render-slow").length ? renderSlowly() : renderFast()
})