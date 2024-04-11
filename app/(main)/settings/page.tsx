import { Button } from "@/components/ui/button";

import { LogoutButton } from "@/components/logout-button";

const SettingsPage = () => {
    return (
        <div>
            <LogoutButton>
                <Button
                    variant="primary"
                    size="sm"
                >
                    Logout
                </Button>
            </LogoutButton>
        </div>
    )
}

export default SettingsPage