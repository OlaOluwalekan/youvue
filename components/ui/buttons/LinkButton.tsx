import { LinkButtonProps } from '@/types/button.interface'
import Link from 'next/link'

const LinkButton = ({ href, text }: LinkButtonProps) => {
  return (
    <Link href={href} className='btn btn-primary px-10'>
      {text}
    </Link>
  )
}

export default LinkButton
