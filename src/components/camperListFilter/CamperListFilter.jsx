import { DivWrap, Input, Label, P, Svg, Title } from './CamperListFilterStyled'
import sprite from '../../assets/sprite.svg'

export const CamperListFilter = () => {
	return (
		<form>
			<P>Filters</P>
			<Title>Vehicle equipment</Title>
			<DivWrap>
				<Label>
					<Input type='checkbox' name='AC' value='AC' />
					<Svg>
						<use href={sprite + '#icon-ac	'} />
					</Svg>
					<span>AC</span>
				</Label>
				<Label>
					<Input type='checkbox' name='Automatic' value='Automatic' />
					<Svg>
						<use href={sprite + '#icon-automatic'} />
					</Svg>
					<span>Automatic</span>
				</Label>
				<Label>
					<Input type='checkbox' name='Kitchen' value='Kitchen' />
					<Svg>
						<use href={sprite + '#icon-kitchen'} />
					</Svg>
					<span>Kitchen</span>
				</Label>
				<Label>
					<Input type='checkbox' name='TV' value='TV' />
					<Svg>
						<use href={sprite + '#icon-tv'} />
					</Svg>
					<span>TV</span>
				</Label>
				<Label>
					<Input type='checkbox' name='Showers/WC' value='Showers/WC' />
					<Svg>
						<use href={sprite + '#icon-shower'} />
					</Svg>
					<span>Showers/WC</span>
				</Label>
			</DivWrap>

			<Title>Vehicle type</Title>
			<DivWrap>
				<Label>
					<Input type='radio' name='Van' value='Van' />
					<Svg>
						<use href={sprite + '#icon-van'} />
					</Svg>
					<span>Van</span>
				</Label>
				<Label
					style={{
						position: 'relative',
						justifyContent: 'flex-end',
						padding: '9px',
					}}
				>
					<Input type='radio' name='FullyIntegrated' value='FullyIntegrated' />

					<Svg
						style={{
							position: 'absolute',
							top: '9px',
						}}
					>
						<use href={sprite + '#icon-alcove'} />
					</Svg>
					<span>Fully Integrated</span>
				</Label>
				<Label>
					<Input type='radio' name='Alcove' value='Alcove' />
					<Svg>
						<use href={sprite + '#icon-fully-integrated'} />
					</Svg>
					<span>Alcove</span>
				</Label>
			</DivWrap>
		</form>
	)
}
