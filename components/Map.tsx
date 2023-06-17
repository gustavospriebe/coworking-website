export function Map() {
    return (
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sAv.+Marcolino+Martins+Cabral,+2644+-+Vila+Moema,+Tubarão+-+SC,+88705-002!5e0!6i16"
                width="100%"
                title="Mapa de localização do Almaz Coworking"
                height="600"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden="false"
                className="map"
                tabIndex={0}
            ></iframe>
        </div>
    );
}
