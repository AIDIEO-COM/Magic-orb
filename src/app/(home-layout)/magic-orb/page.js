import MagicOrbPage from "@/components/pages/magic-orb/MagicOrbPage"
import SecureRoute from "@/utls/SecureRoute"


const MagicOrb = () => {

  return (
    <SecureRoute>
      <MagicOrbPage></MagicOrbPage>
    </SecureRoute>
  )
}

export default MagicOrb