import { AuthorizationForm } from '@/components/authorization-form/authorization-form'
import { Helmet } from 'react-helmet-async'

export default function Authorization() {
    return (
        <div>
            <Helmet>
                <title>Authorization</title>
            </Helmet>

            <AuthorizationForm />
        </div>
    )
}
