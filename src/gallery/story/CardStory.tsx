import Card from '@components/layout/Card';
import Dialog from '@components/layout/Dialog';
import Paragraph from '@components/typography/Paragraph';
import Grid from '@components/grid/Grid';
import { Paperless, Plus } from '@components/Icon';

const CardStory = () => {
    const linkButtonClickHandler = () => {
        console.log('Link Button Clicked');
    };

    const cardClickHandler = () => {
        console.log('Card Clicked');
    };

    return (
		<Grid
			columns={2}
			responsive={{
				sm: { columns: 1 },
				md: { columns: 2 },
				lg: { columns: 2 },
			}}
		>
			<Card
				clickHandler={cardClickHandler}
				disabled={false}
				title='Standard Card'
			>
				Lorem ipsum dolor sit amet, ipsum ad rerum autem hic qui
				aliquid mollitia pariatur, sequi provident eligendi dolorum
				assumenda velit officia aspernatur.
			</Card>

			<Card
				clickHandler={cardClickHandler}
				disabled={false}
				title='Card With Icon'
				titleIcon={<Paperless />}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid, perspiciatis? Quaerat necessitatibus assumenda
				optio, ea doloremque provident maxime, maiores iste ullam
				minus dolorum odit vel veritatis. Facilis deleniti maiores
				hic!
			</Card>

			<Card
				clickHandler={cardClickHandler}
				disabled={false}
				linkButtonTitle='Link Button'
				linkButtonClickHandler={linkButtonClickHandler}
				title='Card With Secondary Action'
				titleIcon={<Paperless />}
			>
				This card has seperate actions for the card click and the
				link button click. The link button will not trigger the card
				click handler.
			</Card>

			<Card
				clickHandler={cardClickHandler}
				disabled={false}
				lineClamp={3}
				linkButtonTitle='Link Button'
				linkButtonClickHandler={linkButtonClickHandler}
				title='Card With Line Clamp'
				titleIcon={<Paperless />}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid, perspiciatis? Quaerat necessitatibus assumenda
				optio, ea doloremque provident maxime, maiores iste ullam
				minus dolorum odit vel veritatis. Facilis deleniti maiores
				hic!
			</Card>

			<Dialog
				title='Dialog from Card'
				TriggerElement={(props) => (
					<Card
						clickHandler={cardClickHandler}
						disabled={false}
						hasDialog
						linkButtonTitle='Open Dialog'
						linkButtonClickHandler={props.clickHandler}
						title='Secondary Action Opens Dialog'
					>
						Lorem ipsum dolor sit amet, ipsum ad rerum autem hic
						qui aliquid mollitia pariatur, sequi provident
						eligendi dolorum assumenda velit officia aspernatur.
					</Card>
				)}
			>
				<Paragraph>
					This dialog was opened from a card action!
				</Paragraph>
			</Dialog>

			<Card
				disabled={true}
				title='Disabled Card With Custom Icon Link Button'
				titleIcon={<Paperless />}
				linkButtonIcon={<Plus />}
				linkButtonIconPosition='start'
				linkButtonTitle='Link Button'
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid, perspiciatis? Facilis deleniti maiores hic! Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
				perspiciatis? Facilis deleniti maiores hic!
			</Card>
		</Grid>
    );
};

export default CardStory;
