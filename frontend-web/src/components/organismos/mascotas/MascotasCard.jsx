import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function MascotaCard({ mascota }) {
    return (
        <Link to={`/path/to/${mascota.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 345, margin: 'auto', marginBottom: '20px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={mascota.image}
                    alt={mascota.nombre_mascota}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {mascota.nombre_mascota}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        G��nero: {mascota.genero_nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Dueño: {mascota.usuario_nombre}
                    </Typography>
                    <Button variant="contained" color="primary">
                        Chat con el dueño
                    </Button>
                </CardContent>
            </Card>
        </Link>
    );
}

export default MascotaCard;
