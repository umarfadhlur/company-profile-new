<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectPhotoResource\Pages;
use App\Models\ProjectPhoto;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ProjectPhotoResource extends Resource
{
    protected static ?string $model = ProjectPhoto::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('project_id')
                    ->label('Project')
                    ->relationship('project', 'project_name')
                    ->searchable()
                    ->preload()
                    ->required(),

                Forms\Components\FileUpload::make('photo_path')
                    ->image()
                    ->required()
                    ->disk('public')
                    ->directory('project_photos'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('project.project_name')
                    ->label('Project')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\ImageColumn::make('photo_path')
                    ->width(120)
                    ->label('Photo'),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Created')
                    ->dateTime(),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Updated')
                    ->dateTime(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjectPhotos::route('/'),
            'create' => Pages\CreateProjectPhoto::route('/create'),
            'edit' => Pages\EditProjectPhoto::route('/{record}/edit'),
        ];
    }
}
